import { Typography, Container, Box, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const MuiTypography = () => {
  return (
    <Container maxWidth="md">
      <Box
        component="section"
        sx={{ p: 2, border: "1px dashed grey", mt: 4, borderRadius: 5 }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="primary.dark"
          fontWeight="bold"
        >
          Typography'nin Kütüphane Projesindeki Önemi
        </Typography>
        <Typography variant="body1">
          Kütüphane uygulamalarında yazı tipleri, kullanıcı deneyimini doğrudan
          etkiler. Okunabilirlik, tutarlılık ve doğru hiyerarşi ile kullanıcılar
          aradıkları bilgilere kolayca ulaşabilir.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          fontWeight="medium"
          color="warning"
        >
          Okunabilirlik Öncelikli Olmalıdır
        </Typography>
        <Typography variant="body2" paragraph>
          Uzun metinlerin rahat okunması için sade ve net fontlar tercih
          edilmeli, aşırı süslü fontlardan kaçınılmalıdır.
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom fontWeight="medium" color="success">
        Hiyerarşi ve Vurgu
      </Typography>
      <Typography variant="body2" paragraph>
        Başlıklar ile içerik metinleri arasında net farklar olmalı, başlıklar
        daha büyük ve kalın, metinler ise sade olmalıdır.
      </Typography>

      <Box>
        <Button
          variant="outlined"
          color="warning"
          size="large"
          fullWidth
          sx={{
            mt: 4,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
              boxshadow: 5,
            },
          }}
          startIcon={<MenuBookIcon />}
        >
          Kitap Ekle
        </Button>
        <Button
          variant="outlined"
          color="warning"
          size="large"
          fullWidth
          sx={{
            mt: 4,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
              boxshadow: 5,
            },
          }}
          endIcon={<DeleteForeverIcon />}
        >
          Kitap Sil
        </Button>
      </Box>
    </Container>
  );
};

export default MuiTypography;
