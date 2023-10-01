import clsx from 'clsx'
import { createRef, MouseEvent, UIEvent, useState } from 'react'

const time = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

type Approaches = Record<
  'remote' | 'onSite' | 'homeBased',
  { name: string; color: string }
>

type Event = {
  id: string
  day: number
  top: number
}

const Scheduler = () => {
  const approaches: Approaches = {
    remote: { name: 'Virtual', color: '#68CDF2' },
    onSite: { name: 'Presencial', color: '#FFD445' },
    homeBased: { name: 'Domiciliaria', color: '#6ADB65' }
  }

  const hoursElement = createRef<HTMLDivElement>()
  const cellsElement = createRef<HTMLDivElement>()
  const synchronizeScroll = (e: UIEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (hoursElement.current) {
      hoursElement.current.scrollTop = e.currentTarget.scrollTop
    }
    if (cellsElement.current) {
      cellsElement.current.scrollTop = e.currentTarget.scrollTop
    }
  }

  const [events, setEvents] = useState<Event[]>([])
  const saveEvent = (event: Event) => {
    console.log(event)
    setEvents([...events, event])
  }

  const handleClickEvent = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)

    const day = Math.round(x / 40 - 0.5)
    const top = Math.round(y / 64 - 0.5) * 64

    const exists = events.some(event => {
      const isSameDay = event.day === day
      const overlapsWithSlot = event.top === top
      return isSameDay && overlapsWithSlot
    })

    if (exists) return console.error('slot with event')

    saveEvent({ id: crypto.randomUUID(), day, top })
  }

  return (
    <div className="flex w-full justify-center text-sm text-black">
      <div className="flex h-full min-w-[21rem] flex-col overflow-hidden">
        <div className="flex">
          <div className="flex min-w-[3rem]"></div>
          <div className="flex h-6 text-center">
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Lunes
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Martes
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Miércoles
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Jueves
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Viernes
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Sábado
            </div>
            <div className="w-10 min-w-[2.5rem] text-[0] first-letter:text-sm">
              Domingo
            </div>
            <div
              aria-hidden="true"
              className="invisible flex-none overflow-scroll"
            ></div>
          </div>
        </div>
        <div className="relative flex h-72 flex-auto flex-col overflow-hidden">
          <div className="flex flex-auto items-stretch overflow-hidden">
            <div
              ref={hoursElement}
              aria-hidden="true"
              className="flex h-auto min-w-[3rem] flex-none items-start overflow-y-hidden"
              onScroll={synchronizeScroll}
            >
              <div className="relative ml-auto box-border">
                <div className="relative h-16 pr-2 text-right">
                  <span className="relative -top-3 hidden">12 AM</span>
                </div>
                <div className="relative h-16 pr-2 text-right">
                  <span className="relative -top-3 block">1 AM</span>
                </div>
                <div className="relative h-16 pr-2 text-right">
                  <span className="relative -top-3 block">1 AM</span>
                </div>
                <div className="relative h-16 pr-2 text-right">
                  <span className="relative -top-3 block">1 AM</span>
                </div>
              </div>
            </div>
            <div
              ref={cellsElement}
              className="flex flex-auto items-start overflow-x-hidden overflow-y-scroll border-white-ghost"
              onScroll={synchronizeScroll}
            >
              <div
                className="relative inline-flex w-full flex-none overflow-hidden align-top"
                onClick={handleClickEvent}
              >
                <div aria-hidden="true">
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                  <div className="h-16 after:pointer-events-none after:absolute after:-mt-[1px] after:w-full after:border-b-2"></div>
                </div>

                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full">
                      {events
                        .filter(({ day }) => day == 0)
                        .map(event => (
                          <div
                            key={event.id}
                            className="absolute z-50 -ml-[1px] h-16 min-w-[2.5rem] bg-[#B4BACC]"
                            style={{ top: event.top }}
                          ></div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full">
                      <div className="absolute top-16 z-50 -ml-[1px] h-32 min-w-[2.5rem] bg-[#B4BACC]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full"></div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full">
                      <div className="absolute top-48 z-50 -ml-[1px] h-32 min-w-[2.5rem] bg-[#6ADB65]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full">
                      <div className="absolute top-16 z-50 -ml-[1px] h-32 min-w-[2.5rem] bg-[#FFD445]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2">
                    <div className="relative h-full w-full">
                      <div className="absolute top-32 z-50 -ml-[1px] h-80 min-w-[2.5rem] bg-[#68CDF2]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="relative w-10 min-w-[2.5rem] shrink-0 grow basis-0 border-r-2 border-white">
                    <div className="relative h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scheduler
