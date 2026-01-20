import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3FFF0",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  containerShield: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  textVerde: {
    textAlign: "center",
    color: "#0D4200",
    fontSize: 36,
  },

  textColor: {
    textAlign: "center",
    color: "#767676",
    fontSize: 16,
    paddingTop: 8,
  },

  bordarPadrao: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
  },

  inputButton: {
    borderWidth: 1,
    borderColor: "#000000ff",
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: "center",  
  },

  generatorButton: {
    backgroundColor: "#239F05",
    color: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    fontSize: 24,
    fontWeight: "400",
    height: 60,
  },  

  containerButtons: {
    paddingHorizontal: 36,
    width: "100%",
    paddingVertical: 20,
    gap: 4,
  },

  containerCopyButton: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },

  copyButton: {
    color: "#ffffff",
    backgroundColor: "#239F05",
    width: "100%",
    height: 84,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
    paddingTop: 26,
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  }
});
