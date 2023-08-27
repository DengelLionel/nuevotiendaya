import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
export default function SingleBlogPost({ post }) {
	console.log("img",post.img)
	return (
		<div className="single-news-card wow fadeInUp">
			<div className="news-thumb bg-cover" style={{ backgroundImage: `url(${post.img})` }}></div>
			<div className="contents">
				<div className="post-meta d-flex">
					<div className="post-cat">
						<Link href={post.linkcategory}>
						{post.category}
						</Link>
					</div>
					<div className="post-date">
						<span>{post.date}</span>
					</div>
				</div>
				<h4>
					<Link href={post.linkcontent}>
					{post.title}
					</Link>
				</h4>
				<p> {post.content} ...</p>

				<Link className="read-more-link" href={post.linkcontent}>
				
						Leer más <BsArrowRight color="#5B7486" size={18} />
				
				</Link>
			</div>
		</div>
	);
}
