"use client";
import { UIButton } from "@/shared/ui/ui-button";
import QRCode from "react-qr-code";
// import { canCopyImagesToClipboard, copyImageToClipboard } from 'copy-image-clipboard'
import { Dialog } from "@headlessui/react";
import React from "react";
import { toast } from "react-toastify";
import { UITextField } from "@/shared/ui/ui-text-field";

export function ModalSendQuiz({
  link = `${location.origin}/quiz/test`,
}: {
  link?: string;
}) {
  const refQr = React.useRef(null);

  const downloadQuiz = () => {
    if (refQr.current) {
      const svgData = new XMLSerializer().serializeToString(refQr.current);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const pngFile = canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.download = "QRCode";
          downloadLink.href = `${pngFile}`;
          downloadLink.click();
        }
      };
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    toast.success("Скопировано!");
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Поделиться ссылкой и QR кодом
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500 mb-4">
          Кнопка ниже скопирует изображение с QR и ссылку на ваш опрос
        </p>

        <div className="flex items-center gap-4 mb-4">
          <UITextField
            className="grow"
            inputProps={{
              type: "text",
              placeholder: "Ссылка",
              disabled: true,
              value: link,
            }}
          />

          <UIButton variant="secondary" onClick={copyLink}>
            Копировать ссылку
          </UIButton>
        </div>
        <div className="flex flex-col items-center gap-4">
          <QRCode
            ref={refQr}
            size={256}
            style={{ height: "auto", maxWidth: "60%", width: "100%" }}
            value={link}
            viewBox={`0 0 256 256`}
          />
          <UIButton
            className="w-full mt-4"
            variant="primary"
            onClick={downloadQuiz}
          >
            Скачать QR
          </UIButton>
        </div>
      </div>
    </>
  );
}
