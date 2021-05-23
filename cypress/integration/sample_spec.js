import testGotoVonderWeb from "./test.spect";

describe("My First Test", () => {
  //   beforeEach(() => {
  //     Cypress.Cookies.preserveOnce();
  //     Cypress.Cookies.defaults({
  //       preserve: ["jwt", "token", "ak_bmsc", "bm_sz", "bm_sv", "_abck"],
  //     });

  //     cy.restoreLocalStorage();
  // //   });
  // beforeEach(function () {
  //   cy.getCookies().then((cookies) => {
  //     const namesOfCookies = cookies.map((c) => c.name);
  //     Cypress.Cookies.preserveOnce(...namesOfCookies);
  //   });
  // });
  //   afterEach(() => {
  //     cy.saveLocalStorage();
  //   });
  it("Authen with guess", () => {
    cy.visit("https://auth-vonder.web.app");
    cy.get(".ant-btn > span").contains("Get Started").click();
    cy.get(":nth-child(2) > .ant-card-body").click();
    cy.get(".ant-checkbox-wrapper").click();
    cy.contains("Continue").click();
    // cy.get("#xl-form-email").type("waranyamaew@gmail.com");
    // cy.get("#xl-form-password").type("12345678");
    // cy.get("#xl-form-submit").click();
  });
});

testGotoVonderWeb();
