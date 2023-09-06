import { servicesData } from "../../components/Services/servicesData"
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];
function generateSiteMap(data) {
    return `<?xml version="1.0" encoding="UTF-8"?>
              <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              <url>
              <loc>https://creatiendaya.com/servicios</loc>
              <lastmod>${formattedDate}</lastmod>
            </url>
      
                ${data?.map(servicio => {
                    return `<url>
                           <loc>${`https://creatiendaya.com/servicios/${servicio.link}`}</loc>
                           <lastmod>${formattedDate}</lastmod> 
                         </url>`
                })}
              </urlset>
    `
}

 function SiteMap() {}

export async function getServerSideProps({ res }) {

    const sitemap = generateSiteMap(servicesData)
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default SiteMap 
