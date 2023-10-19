"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { Order } from "@prisma/client";
import { Button, ButtonProps } from "@/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/alert-dialog";
import { useToast } from "@/ui/use-toast";
import { cancelOrder } from "@/actions";

type CancelOrderButtonProps = ButtonProps & { order: Order };
const CancelOrderButton: FC<CancelOrderButtonProps> = ({ order, ...props }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const deleteOrderHandler = async () => {
    try {
      setIsLoading(true);
      const res = await cancelOrder({ id: order.id });

      if (res.status === "failure") {
        toast({
          variant: "destructive",
          title: "Ooh, something wrong occurred.",
          description: res.error,
        });
        return;
      }

      if (res.status === "success") toast({ description: res.message });
      router.refresh();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Ooh, This is too bad.",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          disabled={order.status === "CANCELED"}
          {...props}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            order and remove its data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={deleteOrderHandler}
            isLoading={isLoading}
          >
            Cancel
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CancelOrderButton;
