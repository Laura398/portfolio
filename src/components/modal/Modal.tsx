import { Modal } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";


export default function ResponsiveModal(props: {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
  link: string;
  app: string | undefined;
}) {
  const { t } = useTranslation();
  const { setOpen } = props;

  const downloadFile = () => {
    console.log("downloadFile");
    
    setOpen(false);
    const appLink = props.app;
    if (!appLink) return;
    const blob : Blob = new Blob([appLink], { type: 'application/octet-stream' });
    const aElement = document.createElement('a');
    aElement.setAttribute('download', "app.apk");
    const href = URL.createObjectURL(blob);
    aElement.href = href;
    // aElement.setAttribute('href', href);
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);
  };

  return (
    <React.Fragment>
      <Modal open={props.open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: "none",
              maxWidth: "unset",
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
            {t("whatHappens")}
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            {t("whatHappensDescription")}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row-reverse" },
            }}
          >
            <Button
              variant="solid"
              color="neutral"
              onClick={() => {
                window.open(props.link, "_blank");
                setOpen(false);
              }}
            >
              {t("goToWebsite")}
            </Button>
            <Button variant="outlined" color="neutral" onClick={downloadFile}>
              {t("downloadApp")}
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
