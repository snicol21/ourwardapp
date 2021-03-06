export type IFaq = {
  question: string
  answer: string | React.ReactNode
}
const FaqSection = ({ faqs = [] as IFaq[] }) => {
  return (
    <div className="py-3">
      <div className="max-w-7xl mx-auto py-5 px-8 sm:py-10 sm:px-6 lg:px-8 bg-white rounded-lg shadow-xl">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {faqs &&
            faqs.map((faq: IFaq) => (
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
        </dl>
      </div>
    </div>
  )
}
export default FaqSection
