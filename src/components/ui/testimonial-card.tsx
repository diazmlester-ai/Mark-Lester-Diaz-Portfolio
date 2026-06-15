"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-brand-primary/10 dark:border-[#2a9d8f]/20 bg-white dark:bg-[#13262e] p-6 sm:p-8 transition-all hover:shadow-lg hover:border-brand-accent/30 dark:hover:shadow-[#2a9d8f]/5 text-left flex flex-col justify-between h-full group",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-brand-primary/10 dark:text-gray-400/10 pointer-events-none select-none">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-yellow-400 text-yellow-500"
                      : "fill-gray-100 dark:fill-gray-700 text-gray-300 dark:text-gray-600"
                  )}
                />
              ))}
            </div>
          )}

          <div className="flex-1 flex flex-col justify-between gap-4">
            <p className="text-pretty text-sm sm:text-base text-brand-primary/90 dark:text-gray-200 font-medium leading-relaxed italic relative z-10 whitespace-pre-line">
              {testimonial}
            </p>
          </div>

          <div className="flex items-center gap-4 justify-start pt-6 mt-4 border-t border-[#edf6f9] dark:border-white/5">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar className="h-11 w-11 border border-brand-primary/5">
                  <AvatarImage src={image} className="object-cover" alt={name} height={48} width={48} referrerPolicy="no-referrer" />
                  <AvatarFallback className="bg-brand-accent/10 text-brand-accent font-black text-sm">{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-extrabold text-sm text-brand-primary dark:text-white leading-tight">{name}</h3>
                <p className="text-xs text-brand-primary/60 dark:text-gray-400 font-semibold font-mono mt-0.5">
                  {role}
                </p>
                {company && (
                  <p className="text-xs text-brand-accent dark:text-[#a0ded6] font-bold font-mono mt-0.5">
                    {company}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }
