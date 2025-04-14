import { Box, Typography, Link as MuiLink } from "@mui/material";

interface InfoCardProps {
  icon: string;
  text: string;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  linkText?: string;
  linkHref?: string;
}

const InfoCard = ({
  icon,
  text,
  title,
  linkText,
  linkHref,
}: InfoCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p={2}
      borderRadius={2}
      bgcolor="white"
      width="100%"
      maxWidth="400px"
      mx="auto"
    >
      <img src={icon} alt={text} width={80} height={80} />

      {title && (
        <Typography variant="h6" fontWeight={700} marginTop='10px' fontSize='14px'>
          {title}
        </Typography>
      )}

      <Typography variant="body1" color="text.main"  fontSize='14px' marginTop='20px'>
        {text}
      </Typography>

      {linkText && linkHref && (
        <MuiLink href={linkHref}  color="primary.main">
          {linkText}
        </MuiLink>
      )}
    </Box>
  );
};

export default InfoCard;
