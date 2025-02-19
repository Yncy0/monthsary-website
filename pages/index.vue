<template>
    <div class="flex flex-col min-w-full justify-center items-center">
        <section class="flex flex-row justify-between h-[1024px] min-w-full">
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
            
        <section class="flex flex-col items-center h-[1024px] min-w-full gap-10">
            <div>
                <h2 class="text-[5rem] font-bold text-pink-500 text-center">
                    Memories
                </h2>
                <p>
                    Here lies our precious memories that we did together, from the beginning until now. 
                </p>
            </div>
            <AppCarousel />
        </section>

        <section class="flex flex-row items-center justify-around min-w-full">
           <div class="flex flex-col items-start w-[480px]">
                <h3 class="text-[5rem] font-bold text-pink-500">
                    Gallery
                </h3>
                <p class="pb-6">
                    A collection of photos we took together. It contains serious, funny, silly, goofy, sweet, romantic photos with each other.
                </p>
                <UButton 
                    label="View Gallery" 
                    size="xl" 
                    icon="i-mdi-image-multiple"
                    class="p-4 shadow-2xl"
                    :block="false"
                />
           </div>
           <div class="flex flex-row ">
            <img 
                src="/assets/images/photo_booth2.jpg"
                class="w-[400px] -rotate-12"    
            />
            <img 
                src="/assets/images/photo_booth1.jpg"
                class="w-[400px] rotate-12 top-28 relative"   
            />
           </div>
        </section>
    </div>
</template>