import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  Stack,
} from "@mui/joy";
import React from "react";
import { useTranslation } from "react-i18next";
import LegalMentions_English from "../../pages/legal-mentions/LegalMentions_English";
import LegalMentions_French from "../../pages/legal-mentions/LegalMentions_French";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const languageCode = localStorage.getItem("lang");

  return (
    <footer className="footer">
      <p style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        {t("legalMentions")}
      </p>
      © Laura Mathieu - 2024 - {t("allRightsReserved")}
      <React.Fragment>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            layout="fullscreen"
            sx={{ backgroundColor: "black", color: "white", overflow: "auto" }}
          >
            <ModalClose
              color="primary"
              sx={{ color: "white", "&:hover": { color: "black" } }}
            />
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
              <DialogTitle level="h1">{t("legalMentions")}</DialogTitle>
              <DialogContent>
                {languageCode === "fr" && <LegalMentions_French />}
                {languageCode === "en" && <LegalMentions_English />}
              </DialogContent>
            </Stack>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </footer>
  );
}
