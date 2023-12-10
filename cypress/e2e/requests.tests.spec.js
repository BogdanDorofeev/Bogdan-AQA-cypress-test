describe("Requests Test", () => {
  it("Get Request Test", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Post Request Test", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    }).then(
        (response) => {
          expect(response.status).to.eq(201);
        }
      );;
  });

  it("Put Request Test", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'fo',
          body: 'bar',
          userId: 1,
        }),
    }).then(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );;
  });
  it("Patch Request Test", () => {
    cy.request("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
    }).then(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );
    });
  it("Delete Request Test", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1", {method: 'DELETE'}).then(
        (response) => {
          expect(response.status).to.eq(200);
        }
      );
  });
});

