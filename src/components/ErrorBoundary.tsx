
import React from "react";
import { AlertTriangle, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { toast } from "./ui/sonner";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development mode
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Could add error reporting service integration here
    // Example: errorReportingService.captureException(error);
  }

  handleReload = () => {
    toast.info("Reloading the application...");
    window.location.reload();
  }

  handleReturn = () => {
    toast.info("Returning to homepage...");
    window.location.href = '/';
  }

  render() {
    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    
    if (this.state.hasError) {
      // Production error view
      if (!isDev) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 animate-fade-in">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-10 w-10 text-blue-700" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-2">We're sorry</h1>
                <p className="text-gray-600">Something unexpected happened. Our team has been notified.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Button 
                  onClick={this.handleReturn}
                  variant="outline"
                >
                  Return Home
                </Button>
                <Button 
                  onClick={this.handleReload}
                  className="gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        );
      }
      
      // Development error view with debugging information
      return (
        <div className="min-h-screen bg-gray-50 p-4 animate-fade-in overflow-auto">
          <div className="container mx-auto max-w-4xl my-10">
            <Alert variant="destructive" className="mb-6">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="text-lg font-bold ml-2">Application Error</AlertTitle>
              <AlertDescription className="mt-2">
                An error occurred while rendering the application.
              </AlertDescription>
            </Alert>

            <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-3 text-red-600">Error Details</h2>
              <div className="bg-gray-100 rounded p-4 mb-4 overflow-x-auto">
                <pre className="text-red-600 font-mono text-sm whitespace-pre-wrap break-words">
                  {this.state.error?.toString()}
                </pre>
              </div>
            </div>

            {this.state.errorInfo && (
              <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold mb-3">Component Stack</h2>
                <div className="bg-gray-100 rounded p-4 overflow-x-auto">
                  <pre className="font-mono text-xs whitespace-pre-wrap break-words">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button 
                onClick={this.handleReturn}
                variant="outline"
              >
                Return Home
              </Button>
              <Button 
                onClick={this.handleReload}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Reload Application
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
