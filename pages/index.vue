<template>
    <div class="flex flex-row min-w-full items-center justify-between">

        <div class="flex flex-col gap-5 items-start">
            <h1 class="text-[8rem] font-bold">
                Happy Monthsary!
            </h1>
            <p>
                I hope you’re doing well my love! Let me ask you a few questions on how we celebrate our monthsary.
            </p>
            <UButton 
                label="Let's Get Started" 
                size="xl" 
                trailing-icon="i-lucide-arrow-right"
                class="p-4"
                :block="false"
            />
        </div>

        <img 
            src="/assets/svg/dummy_cat.svg"
            class=" w-3xl"    
        />

    </div>
</template>