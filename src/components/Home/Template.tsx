import React from "react"
import BlogListItem from "@components/Blog/BlogListItem"
import Container from "@components/Commons/Container"
import { CTAEmail } from "@components/Commons/Button/CTAEmail"
import { BlogInterface } from "@pages/index"

interface HomeTemplateProps {
  blogs: [BlogInterface]
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ blogs }) => {
  return (
    <>
      <section className="mt-20 text-center">
        <Container>
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl sm:leading-snug lg:leading-snug tracking-wide-1 font-fraunces-700">
              Faiq Naufal
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl tracking-wide-1 text-custom-gray-1--light">
              Yet another personal website. I build whatever things I like on
              the web
            </p>
            <div className="mt-10">
              <CTAEmail>Let's Talk! 👋</CTAEmail>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-15 py-[60px] bg-custom-gray-3--light">
        <Container>
          <h2 className="uppercase font-inter-700 text-base lg:text-lg text-custom-primary-green tracking-wide-4 mb-10">
            Writing
          </h2>
          {blogs &&
            blogs.map((blog, index) => {
              const { id } = blog.node
              const last = index === blogs.length - 1
              return (
                <article key={id} className={!last ? "mb-6" : ""}>
                  <BlogListItem blog={blog} />
                </article>
              )
            })}
        </Container>
      </section>
    </>
  )
}

export default HomeTemplate
