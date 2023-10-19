import clsx from "clsx"
import Button from "./Button"
import bbLogo from "../assets/bb_logo.png"

const Panel = ({ heading, children, className, containerStyles }) => {
  return (
    <div
      className={clsx(
        "p-6 bg-white border border-gray-200 rounded-xl",
        className
      )}
    >
      {heading && (
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
          {heading}
        </h5>
      )}
      <div className={clsx("mb-3 font-normal text-gray-800", containerStyles)}>
        {children}
      </div>
    </div>
  )
}

const Dashboard = ({ answers }) => {
  const type = answers[0]
  const price = answers[1].toLocaleString("sv-SE", { useGrouping: true })
  const totalSavings = answers[2].toLocaleString("sv-SE", { useGrouping: true })
  const monthlySavings = answers[3].toLocaleString("sv-SE", {
    useGrouping: true,
  })
  const location = answers[4]
  const [neighbourhood] = location.split(",")

  return (
    <div className="flex flex-col gap-12 justify-center px-8 pt-24 text-center lg:pt-10 lg:px-4 lg:flex-row lg:text-left">
      <Panel heading="Min Bolåneprofil">
        <h5 className="mt-8 mb-2 font-semibold tracking-tight text-gray-900 lg:mt-12">
          Ekonomi
        </h5>
        <p>Sparat kapital: {totalSavings} kr</p>
        <p>Månadsspar: {monthlySavings} kr</p>

        <h5 className="mt-8 mb-2 font-semibold tracking-tight text-gray-900 lg:mt-12">
          Jag vill köpa
        </h5>
        <p>
          Typ: <span className="lowercase">{type}</span>
        </p>
        <p>Pris: {price} kr</p>
        <p>Område: {neighbourhood}</p>

        <h5 className="mt-8 mb-6 font-semibold tracking-tight text-gray-900 text-center lg:mt-12">
          Vill du ha notiser för
          <br /> bra köplägen i ditt område?
        </h5>

        <Button small secondary className="block mx-auto">
          Notifiera mig
        </Button>
      </Panel>

      <div className="flex flex-col gap-12 mb-12 lg:gap-20">
        <Panel heading="När kan jag köpa?" className="relative hidden lg:block">
          <div className="grid grid-cols-4 pt-4 divide-x text-center">
            <div className="flex flex-col gap-5 mr-12 text-right">
              <div className="invisible">-</div>
              <div className="font-medium">Tid till ditt köp</div>
              <div className="font-medium">Fast avgift</div>
              <div className="font-medium">Amorteringsfri period</div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-xl font-medium text-gray-600">Utan lån</div>
              <div className="text-lg font-medium text-primary">
                Mer än 5 år
              </div>
              <div>-</div>
              <div>-</div>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="text-xl font-medium text-gray-600">Privatlån</div>
              <div>Snabbt</div>
              <div>Vanligtvis inte</div>
              <div>Nej</div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-0 p-6 pb-7 bg-white ring ring-2 ring-primary/80 rounded-xl z-4">
              <div className="flex flex-col items-center gap-8">
                <img src={bbLogo} alt="bolåne buddies logo" className="w-32" />
                <div className="flex flex-col gap-5">
                  <div className="font-medium">Direkt</div>
                  <div className="font-medium">Ja</div>
                  <div className="font-medium">Ja</div>
                </div>
                <Button small>Få förhandsbesked</Button>
              </div>
            </div>
          </div>
        </Panel>

        <div className="lg:hidden flex flex-col gap-12">
          <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 ">
            När kan jag köpa?
          </h5>

          <Panel>
            <div className="mb-4 text-2xl font-medium">Utan lån:</div>
            <div className="mt-4 text-xl font-medium text-primary">
              Mer än 5 år
            </div>
          </Panel>

          <Panel containerStyles="flex flex-col gap-2">
            <div className="mb-4 text-2xl font-medium">Privatlån:</div>
            <div className="text-lg font-medium">Tid till ditt köp</div>
            <div>Snabbt</div>
            <div className="mt-3 text-lg font-medium">Fast avgift</div>
            <div>Vanligtvis inte</div>
            <div className="mt-3 text-lg font-medium">
              Amorteringsfri period
            </div>
            <div>Nej</div>
          </Panel>

          <Panel containerStyles="flex flex-col gap-2">
            <img
              src={bbLogo}
              alt="bolåne buddies logo"
              className="w-28 mx-auto mb-6"
            />
            <div className="text-lg font-medium">Tid till ditt köp</div>
            <div>Direkt</div>
            <div className="mt-3 text-lg font-medium">Fast avgift</div>
            <div>Ja</div>
            <div className="mt-3 text-lg font-medium">
              Amorteringsfri period
            </div>
            <div>Ja</div>
            <Button small className="mt-6">
              Få förhandsbesked
            </Button>
          </Panel>
        </div>

        <Panel heading={`När är det köpläge i ${neighbourhood}?`}>
          <p className="mt-8">
            Prisutveckling i ditt område jämfört med staden och Riks
          </p>
        </Panel>
      </div>
    </div>
  )
}

export default Dashboard
