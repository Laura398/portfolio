import { Box, Typography } from "@mui/joy";

export default function LegalMentions_French() {
  return (
    <Box width={{ sm: "95%", md: "50%" }} margin="auto" textAlign="justify">
      <Typography textColor="white">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Laura Mathieu - Portfolio l'identité des différents intervenants
        dans le cadre de sa réalisation et de son suivi.
      </Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Édition du site</strong> :
      </Typography>
      <Typography textColor="white">
        Le présent site, accessible à l’URL
        https://www.portfolio.lauramathieu.com/, est édité par Laura Mathieu,
        résidant avenue Etienne Billieres 31300 Toulouse, de nationalité
        Française (France), née le 02/05/1995.
      </Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Hébergement</strong> :
      </Typography>
      <Typography textColor="white">
        Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP
        80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).
      </Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Responsable de publication</strong> :
      </Typography>
      <Typography textColor="white">Laura Mathieu</Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Nous contacter</strong> :
      </Typography>
      <Typography textColor="white">
        Par téléphone : +33683794378
        <br />
        Par email : laura.mathieu@protonmail.com
      </Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Données personnelles</strong> :
      </Typography>
      <Typography textColor="white">
        Une donnée à character personnel désigne toute information concernant
        une personne physique identifiée ou identifiable (personne concernée).
        Une personne identifiable est une personne qui peut être identifiée,
        directement ou indirectement, notamment par référence à un nom, un
        numéro d'identification ou à un ou plusieurs éléments spécifiques,
        propres à son identité physique, physiologique, génétique, psychique,
        économique, culturelle ou sociale.
      </Typography>
      <Typography textColor="white">
        Les informations personnelles peuvent être recueillies lors de la
        navigation sur le site, notamment via le formulaire de contact. Les
        informations recueillies ne sont en aucun cas transmises à des tiers et
        ne sont utilisées que dans le cadre de la relation commerciale entre
        l'utilisateur et Laura Mathieu.
      </Typography>
      <Typography mt={4} textColor="white">
        Les données personnelles collectées sont les suivantes :
      </Typography>
      <Typography textColor="white">
        Nom et prénom
        <br />
        Adresse mail
      </Typography>
      <Typography mt={4} textColor="white" level="h3">
        <strong>Loi applicable</strong> :
      </Typography>
      <Typography textColor="white">
        Le présent site est soumis au droit français.
      </Typography>
    </Box>
  );
}
