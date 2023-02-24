<template>
    <div class="container max-w-3xl sm:max-w-fit mx-auto flex justify-center items-center flex-col">
        <h1 class="mt-0 mb-2 text-2xl sm:text-3xl font-medium leading-tight text-primary">
            Getting in touch!
        </h1>

        <div class="container mx-auto my-12 max-w-md">
            <form action="https://usebasin.com/f/5fe4d9f9dbc2" method="POST" enctype="multipart/form-data" id="form"
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4 sm:mx-auto">

                <div class="mb-4">
                    <label class="bg-white block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border focus:shadow-outline focus:border-blue-500 rounded w-full py-2 px-3 text-gray-700 bg-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="name" id="name" required placeholder="Enter your name" />
                </div>
                <div class="mb-4">
                    <label class="bg-white block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none focus:shadow-outline focus:border-blue-500 border rounded w-full py-2 px-3 text-gray-700 bg-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                        type="email" name="email" id="email" required placeholder="Enter your email" />
                </div>
                <div class="mb-6">
                    <label class="bg-white block text-gray-700 font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea id="message" name="message" rows="5" cols="33"
                        class="shadow appearance-none max-h-80 border focus:shadow-outline focus:border-blue-500 rounded w-full py-2 px-3 text-gray-700 bg-neutral-100 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your message"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>