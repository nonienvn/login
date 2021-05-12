import React from "react";

import {Link} from "react-router-dom"
import mark from "../Path.svg" 

export default function LoginForm() {
    return (
      <div className="container rounded-lg shadow-lg bg-white" style={{marginLeft:"583px",marginTop: "20px",
      
      width: "435px",
      height: "470px"}}>

        <img className="pl-96 pt-10" src={mark}></img>
      <div className="h-auto w-auto flex items-center justify-center bord border-black bg-none py-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md  space-y-8">
          <div>
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  your mail id
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="you mail id"
                />
              </div>
              
              <div className="pt-4" >
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
  
            <div>
              <button
            
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > 
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                <a href="/logout">Sign in</a>
              </button>
            </div>
            <div>
              <button
            
                className="group relative w-full flex justify-center py-2 px-4 border border-blue-500 text-sm font-medium rounded-md text-blue-500 bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > 
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                <a href="/logout">Login with Gmail</a>
              </button>
            </div>
          </form>

          <div style={{fontSize:"14px"}}>
            Not a member of ILRNU?<a className="text-blue-500">Sinup</a>
          </div>
        </div>
      </div>
      </div>
    )
  }