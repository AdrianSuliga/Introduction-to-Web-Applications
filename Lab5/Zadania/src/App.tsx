import EfektLicznik from "./components/Efekty/EfektLicznik";
import Odliczanie from "./components/Efekty/Odliczanie";
import Tytul from "./components/Efekty/Tytul";
import Formularz from "./components/Formularze/Formularz";
import Haslo from "./components/Formularze/Haslo";
import Logowanie from "./components/Formularze/Logowanie";
import Aktualizacja from "./components/Inne/Aktualizacja";
import Ternary from "./components/Inne/Ternary";
import Koszyk from "./components/Koszyk/Koszyk";
import NowyKoszyk from "./components/Koszyk/NowyKoszyk";
import Licznik from "./components/Liczniki/Licznik";
import NowyLicznik from "./components/Liczniki/NowyLicznik";
import Komentarz from "./components/Produkty/Komentarz";
import Komentarze from "./components/Produkty/Komentarze";
import Studenci from "./components/Studenci/Studenci";
import StudentManager from "./components/Studenci/StudentManager";

function App() {
  return (
    <>
      <Koszyk />
      <NowyKoszyk />
      <Licznik />
      <NowyLicznik />
      <Formularz />
      <Haslo />
      <Logowanie />
      <Ternary />
      <Aktualizacja />
      <Studenci />
      <StudentManager />
      <EfektLicznik />
      <Tytul />
      <Odliczanie />
      <Komentarz
        user={{ id: 12, username: "emac", fullName: "Emma Watson" }}
        post={{
          id: "1",
          postId: "123",
          body: "This is some awesome stuff",
          likes: "7",
        }}
      />
      <Komentarze />
    </>
  );
}

export default App;
