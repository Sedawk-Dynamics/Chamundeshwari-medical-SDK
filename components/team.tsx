'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const team = [
  {
    name: 'Madhu Sudhan Guni',
    designation: 'Founder & CEO',
    initials: 'MG',
    color: '#1b3a8a',
    email: 'madhu@mrlmedisystems.com',
    photo: '/images/team/madhu-sudhan-guni.jpeg',
    bio: 'Madhu leads overall business strategy and key healthcare partnerships. With deep expertise in critical-care equipment and hospital procurement, he drives MRL\'s mission of delivering world-class medical technology to institutions across India.',
  },
  {
    name: 'Rukesh Reddy G',
    designation: 'Director',
    initials: 'RR',
    color: '#2dc5a2',
    email: 'rukesh@mrlmedisystems.com',
    photo: '/images/team/rukesh-reddy-g.jpeg',
    bio: 'Rukesh oversees technical operations, service delivery and biomedical engineering. His hands-on approach ensures every installation meets clinical standards and that after-sales support consistently exceeds client expectations.',
  },
  {
    name: 'Lokesha MK',
    designation: 'Director',
    initials: 'LK',
    color: '#0d2260',
    email: 'lokesh@mrlmedisystems.com',
    photo: '/images/team/lokesha-mk.jpeg',
    bio: 'Lokesha drives sales, business development and client relationship management. His understanding of hospital procurement challenges enables him to craft flexible commercial solutions that work for facilities of every size.',
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-white" aria-label="Our leadership team">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
            <span className="text-[#2dc5a2] text-sm font-semibold uppercase tracking-widest">
              Leadership
            </span>
            <span className="w-8 h-0.5 bg-[#2dc5a2]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold text-[#1b3a8a] text-balance"
          >
            Meet Our Founding Directors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-500 max-w-xl mx-auto text-[0.95rem]"
          >
            Three directors united by a passion for improving patient outcomes through
            better healthcare infrastructure.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group bg-[#f4f7fb] rounded-3xl p-8 hover:shadow-xl hover:shadow-[#1b3a8a]/10 hover:-translate-y-2 transition-all border border-transparent hover:border-gray-100"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                {member.photo ? (
                  <div
                    className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-white"
                    style={{ boxShadow: `0 0 0 2px ${member.color}` }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-display font-bold shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${member.color}, #2dc5a2)` }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                )}
                <div
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center"
                  style={{ borderColor: member.color }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: member.color }} />
                </div>
              </div>

              <div className="text-center mb-5">
                <h3 className="font-display font-bold text-[#1b3a8a] text-lg">{member.name}</h3>
                <p
                  className="text-sm font-semibold uppercase tracking-wide mt-0.5"
                  style={{ color: member.color }}
                >
                  {member.designation}
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed text-center mb-6">
                {member.bio}
              </p>

              {/* Contact links */}
              <div className="flex flex-col gap-2 pt-5 border-t border-gray-200">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1b3a8a] text-sm transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2dc5a2] flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
