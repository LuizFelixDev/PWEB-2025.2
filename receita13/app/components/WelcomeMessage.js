// app/components/WelcomeMessage.js

import { WelcomeTitle } from "../page";

export function WelcomeMessage() {
  return (
    <section>
      <WelcomeTitle />
      <p style={{ marginTop: "10px" }}>
        Este texto foi inserido por um componente de outro diretório.
      </p>
    </section>
  );
}
