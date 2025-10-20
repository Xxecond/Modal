 "use client";

import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({ open, title, children, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-[90%] max-w-md bg-white  rounded-xl shadow-lg">
          <div className="relative p-4 bg-white border-9  rounded-t-xl">
            {title && (
              <Dialog.Title className="text-black text-xl font-semibold border-b pb-2">
                {title}
              </Dialog.Title>
            )}
            <Button onClick={onClose} className="absolute top-3 right-3">
              <XMarkIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-4">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
