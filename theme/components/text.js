export default {
  variants: {
    logo: {
      mt: "1.5",
      h: "1.6rem",
      color: "gray.700",
      fontSize: "md",
      fontWeight: "semibold",
      _hover: {
        cursor: 'pointer',
        textDecoration: 'none',
      }
    },
    nav: {
      mt: "2",
      h: "1.4rem",
      color: "gray.600",
      fontSize: "0.925rem",
      fontWeight: "semibold",
      _hover: {
        cursor: 'pointer',
        color: "gray.800",
        textDecoration: 'none',
      }
    },
    "nav-cta": {
      color: "gray.600",
      bg: "gray.100",
      fontSize: "0.925rem",
      fontWeight: "semibold",
      width: "fit-content",
      px: "4",
      py: "2",
      borderRadius: "md",
      _hover: {
        cursor: 'pointer',
        bg: "gray.200",
        textDecoration: 'none',
      }
    },
  },
}