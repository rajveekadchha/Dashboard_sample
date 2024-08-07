export default function Stats() {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-full bg-cardBg rounded-lg box-1">
        <div class="p-3 text-white max-sm:p-2">
          <div class="flex items-center justify-start mb-2">
            <div class="w-10 h-10 bg-[#0a3671] rounded-md flex items-center justify-center">
              {/* add cart svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#2f88ff"
                  d="M20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm3-5l-.04.29L22 13.8a6.005 6.005 0 0 0-9 5.2c0 .7.13 1.37.35 2H5.5c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10c0-.55.45-1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22c.55 0 1 .45 1 1m-9 5c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m1-6l-3-4.26L9 9z"
                />
              </svg>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs text-left mb-1">Total Orders</p>
            <div className="flex justify-between items-center">
              <div class="text-2xl font-bold">75</div>
              <div class="text-green-500">▲ 3%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cardBg rounded-lg box-2">
        <div class=" p-3 text-white max-sm:p-2">
          <div class="flex items-center justify-start mb-2">
            <div class="w-10 h-10 bg-[#074007] rounded-md flex items-center justify-center">
              {/* shopping bag svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#39b139"
                  d="m21.63 16.27l-3.87 3.9l-1.35-1.37L15 20.22L17.75 23l5.28-5.32zM13 20c0-3.31 2.69-6 6-6c1 0 1.92.24 2.74.67l1.22-4.38L23 10c0-.55-.45-1-1-1h-4.58l-4.59-6.56a.997.997 0 0 0-1.65-.01L6.58 9H2c-.55 0-1 .45-1 1l.1.44l2.61 9.46c.33.65 1.01 1.1 1.79 1.1h7.59c-.05-.33-.09-.66-.09-1M12 4.74L15 9H9zM10 15c0-1.1.9-2 2-2s2 .9 2 2s-.89 2-2 2s-2-.89-2-2"
                />
              </svg>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs text-left mb-1">Total Delivered</p>
            <div className="flex justify-between items-center">
              <div class="text-2xl font-bold">70</div>
              <div class="text-red-500">▼ 3%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cardBg rounded-lg">
        <div class="p-3 text-white box3 max-sm:p-2">
          <div class="flex items-center justify-start mb-2">
            <div class="w-10 h-10 bg-[#441818] rounded-md flex items-center justify-center">
              {/* shopping bag svg red */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d33c3c"
                  d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.13zM23 10l-.04.29L22 13.8a6.005 6.005 0 0 0-9 5.2c0 .7.13 1.37.35 2H5.5c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10c0-.55.45-1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22c.55 0 1 .45 1 1m-9 5c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m1-6l-3-4.26L9 9z"
                />
              </svg>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs text-left mb-1">Total Cancelled</p>
            <div className="flex justify-between items-center">
              <div class="text-2xl font-bold">05</div>
              <div class="text-green-500">▲ 3%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cardBg rounded-lg">
        <div class=" p-3  text-white box3 max-sm:p-2">
          <div class="flex items-center justify-start mb-2">
            <div class="w-10 h-10 bg-[#5f1c27] rounded-md flex items-center justify-center">
              {/* revenue svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#eea0ad"
                  d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a1 1 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"
                />
              </svg>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs text-left mb-1">Total Revenue</p>
            <div className="flex justify-between items-center">
              <div class="text-2xl font-bold">$12k</div>
              <div class="text-red-500">▼ 3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
