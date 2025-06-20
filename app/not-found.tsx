import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-stone-800 text-white p-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-24 w-24 text-primary mb-8 animate-bounce" />
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-md mx-auto">
          Oops! The page you're looking for doesn't seem to exist. It might have been moved or deleted.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Go Back Home
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-8 text-sm text-slate-500">GOAT FZ-LLC &copy; {new Date().getFullYear()}</div>
    </div>
  )
}
