
        
        let xOfInput = 6371000.0 * Math.cos(lat) * Math.cos(long)
        let yOfInput = 6371000.0 * Math.cos(lat) * Math.sin(long)
        let zOfInput = 6371000.0 * Math.sin(lat)
        
        let currentLong = meLng
        let currentLat = meLat
        
        let xOfCurrent = 6371000.0 * Math.cos(currentLat) * Math.cos(currentLong)
        let yOfCurrent = 6371000.0 * Math.cos(currentLat) * Math.sin(currentLong)
        let zOfCurrent =  6371000.0 * Math.sin(currentLat)
        
        let x = xOfInput - xOfCurrent
        let z = zOfInput - zOfCurrent
        let y = yOfInput - yOfCurrent

        console.log(x,y,z);
