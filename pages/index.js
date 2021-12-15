import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Upload from '@/components/Upload'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Upload />
      <Footer />
    </div>
  )
}
