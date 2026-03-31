
import Link from 'next/link'
import { Home } from 'lucide-react'
import NavigateToButton from '@/components/navigation/navigate-to-button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-clearBlue via-white to-mainYellow flex items-center justify-center px-4 pt-32">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-darkGray opacity-20">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-switzer font-bold text-darkGray mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-clearBlue text-darkGray font-semibold rounded-lg hover:bg-darkGray hover:text-white transition-all duration-300 group"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          {/* <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-darkGray text-darkGray font-semibold rounded-lg hover:bg-darkGray hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Page précédente
          </button> */}
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Vous cherchez quelque chose de spécifique ?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <NavigateToButton
              targetSection="nos-services"
              offsetY={-250}
              className="!w-auto !bg-gray-100 !px-3 !py-1 !text-sm hover:!bg-gray-200"
            >
              Nos services
            </NavigateToButton>
            <NavigateToButton
              targetSection="nos-realisations"
              offsetY={-250}
              className="!w-auto !bg-gray-100 !px-3 !py-1 !text-sm hover:!bg-gray-200"
            >
              Nos réalisations
            </NavigateToButton>
            <NavigateToButton
              targetSection="contact"
              offsetY={-250}
              className="!w-auto !bg-gray-100 !px-3 !py-1 !text-sm hover:!bg-gray-200"
            >
              Contact
            </NavigateToButton>
          </div>
        </div>
      </div>
    </div>
  )
}
