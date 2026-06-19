import Image from 'next/image'

const team = [
  {
    name: 'Chase Mitchell',
    title: 'Head of Product Development & Software Design',
    image: '/chase.png',
    imageStyle: { objectPosition: 'center 10%', transform: 'scale(1)' },
    bio: 'Chase leads all product development and software design efforts, turning ideas into robust, user-focused solutions.',
    email: 'cmitchell@flyerdesignsolutions.com',
    linkedin: 'https://www.linkedin.com/in/chase-f-mitchell-5a4886297/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bp3L8VlsrQIq%2Bd4Zb0tUVpw%3D%3D',
  },
  {
    name: 'Weston Mitchell',
    title: 'Head of Business Operations',
    image: '/weston.png',
    imageStyle: { objectPosition: 'center top', transform: 'scale(1.6)', transformOrigin: 'center 100%' },
    bio: 'Weston oversees business operations, partnerships, and strategy to drive growth and keep the mission on track.',
    email: 'wmitchell@flyerdesignsolutions.com',
    linkedin: 'https://www.linkedin.com/in/weston-mitchell-653296259/',
  },
]

export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
      <p className="mt-4 text-white/85 max-w-2xl">
        We are two brothers who grew up in aviation and are driven to make route planning more efficient, simple, and standardized.
      </p>
      <p className="mt-3 text-white/85 max-w-2xl">
        We help VFR pilots build safe and legal routes through our flagship product AviateVFR: the automatic route finder that accounts for weather, terrain, and airspace to create a VFR route from start to destination in seconds.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10"
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={member.imageStyle}
              />
            </div>
            <div className="p-5 flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-orange-400 font-medium">{member.title}</p>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{member.bio}</p>
              {(member.email || member.linkedin) && (
                <div className="mt-3 flex flex-col gap-1">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      Email: {member.email}
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
