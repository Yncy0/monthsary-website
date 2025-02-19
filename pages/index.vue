<template>
    <div class="flex flex-col min-w-full justify-around items-center">
        <section class="flex flex-row items-center justify-between">
            <div class="flex flex-col items-start">
                <h1 class="text-[8rem] font-bold text-start">
                    Happy 
                    <span class="text-pink-500">
                        Monthsary!
                    </span>
                </h1>
                <p class="pb-6">
                    I hope you are doing well my love! Let me ask you a few questions on how we celebrate our monthsary.
                </p>
                <UButton 
                    label="Let's Get Started" 
                    size="xl" 
                    trailing-icon="i-lucide-arrow-right"
                    class="p-4 shadow-2xl"
                    :block="false"
                />
            </div>

            <img 
                src="/assets/svg/dummy_cat.svg"
                class=" w-3xl h-[640px]"    
            />
        </section>
            <h2 class="text-[5rem] font-bold text-pink-500">
                Memories
            </h2>
            <p>
                Here lies our precious memories that we did together, from the beginning until now. 
            </p>
        <section>

        </section>

        <section class="flex flex-row items-center justify-between">
           <div class="flex flex-col items-start">
                <h3 class="text-[5rem] font-bold text-pink-500">
                    Gallery
                </h3>
                <p>
                    A collection of photos we took together. It contains serious, funny, silly, goofy, sweet, romantic photos with each other.
                </p>
           </div>
        </section>
    </div>
</template>