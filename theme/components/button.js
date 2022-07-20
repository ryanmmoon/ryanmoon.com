

export default {
  baseStyle: {
    fontSize: "0.925rem",
    fontWeight: "semibold",
    color: "gray.600",
    _hover: {
      color: "gray.800",
      textDecoration: 'none',
    }
  },
  variants: {
    "contact": {
      color: "white",
      bg: "blue.500",
      fontSize: "0.925rem",
      fontWeight: "semibold",
      w: "max-content",
      px: "6",
      py: "2",
      borderRadius: "md",
      _hover: {
        color: "white",
        bg: "blue.600",
        textDecoration: 'none',
      }
    },
  },
}