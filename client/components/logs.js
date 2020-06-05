import React from 'react'
import { Link } from 'react-router-dom'

const Logs = () => {
  return (
    <div>
      <div className="wx-10 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-400 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            <Link id="brand-name" to="/" className="font-semibold tracking-tight">
              Home
            </Link>
          </p>
        </div>
        <div>
          <dl>
            <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">Application for</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Backend Developer
              </dd>
            </div>
            <div className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm leading-5 font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                margotfoster@example.com
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
