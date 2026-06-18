import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  CheckCircle2,
  Shield,
  Clock,
  Phone,
  Trash2,
  UserX,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eliminación de Cuenta - Mi Caña" },
      {
        name: "description",
        content:
          "Solicite la anulación de su cuenta y la eliminación de datos en la aplicación Mi Caña de Azucarera Paraguaya S.A.",
      },
      { property: "og:title", content: "Eliminación de Cuenta - Mi Caña" },
      {
        property: "og:description",
        content:
          "Solicite la anulación de su cuenta y la eliminación de datos en la aplicación Mi Caña.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/595985501444?text=Hola,%20solicito%20la%20anulaci%C3%B3n%20de%20mi%20cuenta%20en%20la%20aplicaci%C3%B3n%20Mi%20Ca%C3%B1a.%0A%0AEntiendo%20que%20se%20anular%C3%A1n%20los%20siguientes%20datos:%0A-%20Datos%20de%20acceso%20de%20la%20cuenta.%0A-%20Datos%20personales%20asociados%20al%20usuario.%0A-%20Informaci%C3%B3n%20de%20uso%20vinculada%20a%20la%20cuenta.%0A%0ANombre:%20%0AN%C3%BAmero%20de%20documento:%20%0AN%C3%BAmero%20de%20socio:%20";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            MC
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-foreground">
              Mi Caña
            </h1>
            <p className="text-xs text-muted-foreground">
              Azucarera Paraguaya S.A.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Intro */}
        <section className="mb-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <UserX className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Eliminación de Cuenta
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            La aplicación Mi Caña permite a los usuarios solicitar la anulación
            de su cuenta y la eliminación de los datos asociados.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Solicitar anulación
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
              Para solicitar la anulación de su cuenta, haga clic en el
              siguiente enlace de WhatsApp. Será atendido por nuestro equipo de
              soporte.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Contactar por WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Tel: +595 985 501 444
            </p>
          </div>
        </section>

        {/* Details grid */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Data to delete */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-primary">
              <Trash2 className="h-5 w-5" />
              <h4 className="font-semibold text-foreground">
                Datos que se anularán
              </h4>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Datos de acceso de la cuenta.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Datos personales asociados al usuario:</span>
              </li>
              <li className="ml-6 space-y-1 text-xs text-muted-foreground/80">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  Nro. Documento / CI
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  Nro. Teléfono
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  Correo Electrónico
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  Código de Cañero
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  Nombre y apellido
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Información de uso vinculada a la cuenta.</span>
              </li>
            </ul>
          </div>

          {/* Retention & timeframe */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="h-5 w-5" />
                <h4 className="font-semibold text-foreground">
                  Datos que podrían conservarse
                </h4>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Registros requeridos por obligaciones legales, regulatorias o
                administrativas aplicables.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <h4 className="font-semibold text-foreground">
                  Plazo de procesamiento
                </h4>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Las solicitudes serán atendidas dentro de los{" "}
                <strong className="text-foreground">
                  30 días posteriores
                </strong>{" "}
                a su recepción.
              </p>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="mt-10 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/10 p-6">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <FileText className="h-4 w-4 text-primary" />
              Desarrollador: Azucarera Paraguaya S.A.
            </div>
            <p className="text-muted-foreground">Aplicación: Mi Caña</p>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>Contacto: +595 985 501 444</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
