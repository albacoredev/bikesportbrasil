import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Logo from "../assets/logoSmall.webp";
import Hero from "../assets/heroMedium.webp";
import Insta1 from "../assets/insta1Small.webp";
import Insta2 from "../assets/insta2Small.webp";
import Insta3 from "../assets/insta3Small.webp";
import Repair from "../assets/repairMedium.webp";
import BikeAdultMedium from "../assets/bikeAdultSmall.webp";
import BikeKidSmall from "../assets/bikeKidSmall.webp";
import BikeUsedSmall from "../assets/bikeUsedSmall.webp";
import PhoneDialog from "../components/phone-dialog";

const BIKE_DIALOG_ID = "bike-dialog";
const EQUIPMENT_DIALOG_ID = "equipment-dialog";
const MAINTENANCE_DIALOG_ID = "maintenance-dialog";

export const Route = createRootRoute({
  component: () => {
    const bikeDialog = document.getElementById(
      BIKE_DIALOG_ID
    ) as HTMLDialogElement;
    const equipmentDialog = document.getElementById(
      EQUIPMENT_DIALOG_ID
    ) as HTMLDialogElement;
    const maintenanceDialog = document.getElementById(
      MAINTENANCE_DIALOG_ID
    ) as HTMLDialogElement;

    const openBikeDialog = () => bikeDialog.showModal();
    const openEquipmentDialog = () => equipmentDialog.showModal();
    const openMaintenanceDialog = () => maintenanceDialog.showModal();

    return (
      <div className="w-full flex items-center flex-col bg-background">
        <PhoneDialog
          id={BIKE_DIALOG_ID}
          title="garanta o seu brinde"
          subtitle="na compra de uma bike"
        />
        <PhoneDialog
          id={EQUIPMENT_DIALOG_ID}
          title="10% de cashback"
          subtitle="na compra de equipamentos"
        />
        <PhoneDialog
          id={MAINTENANCE_DIALOG_ID}
          title="30% de desconto"
          subtitle="no pacote de 4 revisões"
        />

        <div className="p-4 w-full">
          <img
            className="object-cover"
            style={{ height: "35px", width: "150px" }}
            src={Logo}
            alt="Bike Sport Bicicletas Logo"
          />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div
            style={{
              height: "345px",
            }}
            className="px-4 vertStack gap-2 bg-center bg-cover bg-blend-darken z-10 bg-background"
          >
            <img
              src={Hero}
              alt=""
              className="absolute -z-10 object-cover brightness-50"
              style={{
                height: "345px",
              }}
            />
            <h1 className="text-4xl uppercase text-center">
              tudo para o ciclista
            </h1>
            <h2 className="text-sm uppercase">em são josé dos campos</h2>
          </div>
          <div className="vertStack gap-8">
            <div className="vertStack gap-2">
              <span className="text-lg">
                <span className="font-bold">4,9</span> estrelas no Google
              </span>
              <div className="flex text-orange-400 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                </svg>
              </div>
              <span className="text-sm font-light">+200 avaliações</span>
            </div>
            <a
              href="https://wa.me/5512996579431"
              target="_blank"
              rel="noopener"
            >
              <button className="btn btn-primary uppercase">
                Entre em contato
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </button>
            </a>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-md flex flex-col gap-4">
              <div className="px-8">
                <h2 className="text-3xl">Bikes de qualidade</h2>
                <h3 className="text-xl font-light">
                  que melhoram seu desempenho
                </h3>
              </div>
              <div className="flex gap-1">
                <div className="flex flex-col gap-2">
                  <img
                    src={BikeAdultMedium}
                    alt=""
                    style={{ height: "170px", width: "140px" }}
                    className="object-cover"
                  />
                  <h3 className="ml-2 text-sm">Adulto</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={BikeKidSmall}
                    alt=""
                    style={{ height: "170px", width: "140px" }}
                    className="object-cover"
                  />
                  <h3 className="ml-2 text-sm">Infantil</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src={BikeUsedSmall}
                    alt=""
                    style={{ height: "170px", width: "140px" }}
                    className="object-cover"
                  />
                  <h3 className="ml-2 text-sm">Usadas</h3>
                </div>
              </div>
              <div className="vertStack gap-2">
                <h2 className="text-xl">
                  Super <span className="font-bold">brinde</span> na compra da
                  bike!
                </h2>
                <button
                  className="btn btn-primary uppercase"
                  onClick={openBikeDialog}
                >
                  garantir brinde
                </button>
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 flex flex-col gap-2">
            <h3 className="text-lg text-white">
              Promoções <span className="font-bold">exclusivas</span> para
              seguidores
            </h3>
            <div>
              <a
                href="https://www.instagram.com/bikesportbrasil/"
                target="_blank"
                rel="noopener"
              >
                <button className="btn btn-secondary uppercase">
                  Seguir no insta
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-md flex flex-col gap-4">
              <div className="px-8">
                <h2 className="text-3xl">Equipamentos</h2>
                <h3 className="text-xl font-light">para o pedal perfeito</h3>
              </div>

              <div className="flex gap-1">
                <img
                  style={{ height: "170px", width: "140px" }}
                  className="object-cover"
                  src={Insta1}
                  alt=""
                />
                <img
                  style={{ height: "170px", width: "140px" }}
                  className="object-cover"
                  src={Insta2}
                  alt=""
                />
                <img
                  style={{ height: "170px", width: "140px" }}
                  className="object-cover"
                  src={Insta3}
                  alt=""
                />
              </div>

              <div className="vertStack gap-2">
                <h2 className="text-xl">
                  Cashback de <span className="font-bold">10%</span> em
                  equipamentos!
                </h2>
                <button
                  className="btn btn-primary uppercase"
                  onClick={openEquipmentDialog}
                >
                  garantir cashback
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-md flex flex-col gap-4">
              <div className="px-8">
                <h2 className="text-3xl">Manutenção Confiável</h2>
                <h3 className="text-xl font-light">
                  com sistema{" "}
                  <span className="text-primary font-bold">leva e traz</span>
                </h3>
              </div>
              <div className="vertStack px-8">
                <img
                  className="object-cover"
                  src={Repair}
                  style={{ height: "170px", width: "366px" }}
                  alt=""
                />
              </div>
              <div className="vertStack gap-2">
                <div className="text-center">
                  <h2 className="text-xl">
                    Desconto de <span className="font-bold">30%</span>
                  </h2>
                  <h2 className="font-light">no pacote de 4 revisões</h2>
                </div>
                <button
                  className="btn btn-primary uppercase"
                  onClick={openMaintenanceDialog}
                >
                  garantir desconto
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-8 px-4">
            <div className="horStack gap-4">
              <a
                href="https://www.instagram.com/bikesportbrasil/"
                target="_blank"
                rel="noopener"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>{" "}
              <a
                href="https://wa.me/5512996579431"
                target="_blank"
                rel="noopener"
                title="Whatsapp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>{" "}
              <a
                href="https://www.facebook.com/bikesportbrasil/?locale=pt_BR"
                target="_blank"
                rel="noopener"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
            <div className="vertStack">
              <div>
                <span className="text-sm font-light">
                  Av. Dr. João Baptista Soares de Queiroz Júnior, 968
                  <br />
                  Jardim das Indústrias, São José dos Campos - SP
                </span>
              </div>
              <div className="flex gap-1">
                <a
                  href="https://maps.app.goo.gl/gyv2maZkCcjWuRn26"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-sm underline">abrir no maps</span>
                    <ArrowTopRightOnSquareIcon className="size-4" />
                  </div>
                </a>
                <a
                  href="https://www.waze.com/en/live-map/directions/br/sp/bike-sport-bicicletas?place=ChIJa_1ujHY1zJQROlGD7FpaJrU"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-sm underline">abrir no waze</span>
                    <ArrowTopRightOnSquareIcon className="size-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-8 px-4 w-full">
            <a
              className="text-sm underline"
              href="https://www.gnunezandrade.dev/"
              target="_blank"
              rel="noopener"
            >
              gandrade Marketing Digital
            </a>

            <div className="flex flex-col text-xs font-light gap-3">
              <a
                href="https://www.pexels.com/video/wood-sunset-water-camera-4649965/"
                target="_blank"
                rel="noopener"
              >
                Video by Pavel Danilyuk
              </a>
              <a
                href="https://www.pexels.com/video/little-boy-riding-a-bike-3683318/"
                target="_blank"
                rel="noopener"
              >
                Video by samazing family
              </a>
              <a
                href="https://www.pexels.com/video/person-biking-on-the-forest-5659532/"
                target="_blank"
                rel="noopener"
              >
                Video by Be The Observer
              </a>
              <a
                href="https://www.pexels.com/photo/a-child-wearing-a-beanie-and-a-red-jacket-riding-a-bike-5792904/"
                target="_blank"
                rel="noopener"
              >
                Photo by Yan Krukau
              </a>
              <a
                href="https://www.pexels.com/photo/man-with-white-shirt-riding-abicycle-on-a-mountain-163491/
"
                target="_blank"
                rel="noopener"
              >
                Photo by Pixabay
              </a>
              <a
                href="https://www.pexels.com/photo/black-and-white-hardtail-bike-on-brown-road-between-trees-100582/"
                target="_blank"
                rel="noopener"
              >
                Photo by Philipp M
              </a>
              <a
                href="https://unsplash.com/photos/selective-focus-photo-of-bicycle-part-7YUW7fvIYoQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener"
              >
                Photo by Wayne Bishop
              </a>
            </div>
          </div>

          {(location.hostname === "localhost" ||
            location.hostname === "127.0.0.1") && <TanStackRouterDevtools />}
        </div>
      </div>
    );
  },
});
