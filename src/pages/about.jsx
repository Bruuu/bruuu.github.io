import * as React from "react"
import { MailIcon, BriefcaseIcon, LocationMarkerIcon, CalendarIcon } from '@heroicons/react/solid'
import Layout from '../components/layout/Layout';

const profile = {
    name: 'Kristina Brueva',
    email: 'kristinabruuu@gmail.com',
    avatar:
    'https://media-exp3.licdn.com/dms/image/C5603AQHb_jS81so0jQ/profile-displayphoto-shrink_100_100/0/1621810832873?e=1631750400&v=beta&t=z_OlhGS4yCM6Vto0sskEOOMjcXC9ebtiaxU00vfQecQ',
    backgroundImage:
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80',
    title: 'Junior Full-Stack Developer',
    company: 'Alembic',
    type: 'Full-time',
    office: 'Remote',
    location: 'Melbourne',
}

export default function About() {
  return (
    <Layout>
        <div>
            <div className="mb-4">
                <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                    <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div className="sm:block md:block mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">{profile.title}</h2>
                    
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {profile.type}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {profile.company}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {profile.office}
                </div>
                </div>
            </div>
                    </div>
                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                        <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Email</span>
                    </button>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}