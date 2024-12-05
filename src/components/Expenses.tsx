import BarChart from "./BarChart"

 

function Expenses() {
  return (
    <section className="flex flex-col p-5 bg-white rounded-xl  ">
        <h2 className="text-2xl font-semibold text-darkBrown mb-20">Spending - Last 7 days </h2>
        <BarChart/>
        <div className="flex justify-between gap-4">
            <div className="flex flex-col">
                <p className="text-mediumBrown text-sm ">Total this month </p>
                <h2 className="text-darkBrown font-bold text-4xl">$478.33</h2>
            </div>
            <div className="flex flex-col self-end">
                <p className="text-darkBrown font-bold text-sm">+2.4% </p>
                <p className="text-mediumBrown text-sm ">from last month</p>
            </div>
        </div>
    </section>
  )
}

export default Expenses