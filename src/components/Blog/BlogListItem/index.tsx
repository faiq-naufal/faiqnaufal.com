import React from "react"
import { Link } from "gatsby"
import { BlogInterface } from "@pages/blog"

interface BlogListItemProps {
  blog: BlogInterface
}

const BlogListItem: React.FC<BlogListItemProps> = ({ blog }) => {
  const {
    slug,
    timeToRead,
    frontmatter: { date, title, tldr },
  } = blog.node

  const newDate = new Date(date)
  const day = newDate.toLocaleString("default", { day: "2-digit" })
  const month = newDate.toLocaleString("default", { month: "short" })
  const year = newDate.toLocaleString("default", { year: "numeric" })
  const resultDate = `${day} ${month} ${year}`

  return (
    <div className="bg-custom-white-1--light border-custom-black-3--light border-2 rounded-lg py-6 px-5 lg:py-8 lg:px-6">
      <p className="text-custom-gray-2--light text-sm mb-5">
        <time dateTime={date}>{resultDate}</time>
      </p>
      <h3 className="text-2xl lg:text-[1.75rem] lg:leading-8 mb-3 block font-fraunces-700 italic tracking-wide-1">
        <Link to={`/blog/${slug}`} className="inline-flex hover:opacity-70">
          {title}
        </Link>
      </h3>
      <p className="text-base lg:text-lg text-custom-gray-1--light mb-5">
        {tldr}
      </p>
      <div className="text-sm lg:text-base text-custom-black-1--light font-inter-500">
        <Link to={`/blog/${slug}`} className="inline-flex hover:opacity-70">
          Read More · {timeToRead} min read
        </Link>
      </div>
    </div>
  )
}

export default BlogListItem
