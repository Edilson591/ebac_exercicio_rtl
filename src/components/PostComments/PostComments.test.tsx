import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
// import PostComment from '.';

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar dois comentarios", () => {
    render(<Post />);

    const input = screen.getByTestId("comentar");
    const button = screen.getByTestId("botao-enviar");

    fireEvent.change(input, {
      target: {
        value: "primeiro comentario",
      },
    });
    fireEvent.click(button);

    expect(screen.getByText("primeiro comentario")).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: "segundo comentario",
      },
    });
    fireEvent.click(button);

    expect(screen.getByText("segundo comentario")).toBeInTheDocument();
  });

});
