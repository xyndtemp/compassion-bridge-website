import React from "react";

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
    // Optionally log error to an external service here
  }

  render() {
    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 animate-fade-in">
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Oops! Something went wrong.</h1>
            <p className="mb-6 text-gray-600">We're sorry, an unexpected error has occurred.</p>
            {isDev && this.state.error && (
              <div className="text-left bg-gray-100 rounded p-4 mb-4 overflow-x-auto">
                <h2 className="font-semibold text-lg mb-2">Error Details</h2>
                <pre className="text-red-600 text-sm whitespace-pre-wrap break-words">{this.state.error.toString()}</pre>
                {this.state.errorInfo && (
                  <details className="text-gray-700 mt-2">
                    <summary className="cursor-pointer">Stack Trace</summary>
                    <pre className="text-xs whitespace-pre-wrap break-words">{this.state.errorInfo.componentStack}</pre>
                  </details>
                )}
              </div>
            )}
            <button
              className="mt-4 bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
