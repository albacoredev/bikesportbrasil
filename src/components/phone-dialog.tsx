import { XMarkIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import IMask from "imask";
import { ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface Props {
  id: string;
  title: string;
  subtitle: string;
}

const PhoneDialog = (props: Props) => {
  const phonePipe = IMask.createPipe({
    mask: "+55 00 00000-0000",
  });

  const schema = yup
    .object({
      phone: yup.string().length(17).required(),
    })
    .required();

  const {
    register,
    // handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: { phone: string }) =>
  //   console.log({ ...data, segment: props.id });

  useEffect(() => {
    yup.setLocale({
      string: { length: "Número inválido" },
    });
  }, []);

  return (
    <dialog id={props.id} className="modal">
      <div className="modal-box bg-secondary rounded-none">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="submit"
            onClick={() => reset()}
            title="fechar"
          >
            <XMarkIcon className="text-white" />
          </button>
        </form>
        <div className="vertStack py-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold uppercase">{props.title}</p>
            <p>{props.subtitle}</p>
          </div>
          <p>Depois é só informar seu telefone na loja!</p>
          <form method="dialog" className="vertStack">
            <label className="form-control w-full max-w-xs">
              <input
                {...register("phone", {
                  onChange: (v: ChangeEvent<HTMLInputElement>) =>
                    setValue("phone", phonePipe(v.target.value ?? "")),
                })}
                placeholder="Celular"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.phone?.message}
                </span>
              </div>
            </label>
            <button className="btn btn-primary uppercase" type="submit">
              enviar
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit" onClick={() => reset()}>
          fechar
        </button>
      </form>
    </dialog>
  );
};

export default PhoneDialog;
