import { Button } from "@/components/ui/Button";
import { IconX } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/Dialog";

interface DialogModalProps {
  open: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export function SharedModal({
  open,
  title,
  description,
  onClose,
  children,
}: DialogModalProps) {
  const showInfoOnly = !children;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={showInfoOnly ? "!max-w-md" : "w-full !max-w-2xl"}
      >
        {showInfoOnly && (
          <>
            <DialogHeader>
              {title && <DialogTitle className="flex">{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>

            <div className="flex justify-end pt-4">
              <Button className="btn" onClick={onClose}>
                Close
              </Button>
            </div>
          </>
        )}
        <div className="flex cursor-pointer w-full justify-end">
          <IconX
            onClick={onClose}
            color="red"
            className="hover:bg-gray-100 rounded-md"
          />
        </div>

        {children && (
          <div className="mt-2 max-h-[75vh] overflow-auto">{children}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
