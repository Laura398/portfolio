import { useTranslation } from 'react-i18next';
import './Footer.scss';
import React from 'react';
import { DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Stack } from '@mui/joy';
import LegalMentions from '../../pages/legal-mentions/LegalMentions';

export default function Footer() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    return (
        <footer className="footer">
            <p style={{cursor: "pointer"}} onClick={() => setOpen(true)}>Mentions Légales</p>
            © Laura Mathieu - 2024 - {t("allRightsReserved")}

            <React.Fragment>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog layout="fullscreen" sx={{backgroundColor: "black", color: "white", overflow: "auto"}}>
                        <ModalClose color="primary" sx={{color: "white", "&:hover": {color: "black"}}} />
                        <Stack direction="column" justifyContent="center" alignItems="center" gap={4}>
                            <DialogTitle>Mentions Légales</DialogTitle>
                            <DialogContent>
                                <LegalMentions />
                            </DialogContent>
                        </Stack>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </footer>
    )
}