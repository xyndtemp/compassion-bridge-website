
import React from "react";
import { ScanQrCode } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";

interface ScanToPayProps {
  onClose: () => void;
}

const ScanToPay: React.FC<ScanToPayProps> = ({ onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ScanQrCode className="h-6 w-6" />
            <span>Scan to Donate</span>
          </DialogTitle>
          <DialogDescription>
            Scan this QR code with your phone's camera app to make a donation to the Compassion Bridge Initiative.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center p-6">
          <div className="w-64 h-64 bg-white p-4 rounded-lg border-2 border-blue-500 mb-4 flex items-center justify-center">
            {/* Placeholder QR code - In a real app, this would be a generated QR code */}
            <div className="w-full h-full bg-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <ScanQrCode className="h-32 w-32 text-blue-700" />
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-blue-700"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-blue-700"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-blue-700"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-blue-700"></div>
            </div>
          </div>
          <p className="text-sm text-center text-gray-600 mb-4">
            Your donation helps us continue our mission of supporting those in need.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button>
              <a href="https://donate.compassionbridge.org" target="_blank" rel="noopener noreferrer">
                Donate Online
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScanToPay;
