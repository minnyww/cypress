export default function testGotoVonderWeb() {
  describe("My First Test", () => {
    it("Authen with guess", () => {
      cy.visit("https://vonder.web.app");
    });
  });
}
