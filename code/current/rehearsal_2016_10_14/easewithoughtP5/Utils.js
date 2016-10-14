var Utils = {
    addVectors: function(vec1, vec2) {
        var vec3 = {};
        vec3.x = vec1.x + vec2.x;
        vec3.y = vec1.y + vec2.y;
        if (vec1.z != undefined && vec2.z != undefined) vec3.z = vec1.z + vec2.z;
        return vec3;
    },
    subVectors: function(vec1, vec2) {
        var vec3 = {};
        vec3.x = vec1.x - vec2.x;
        vec3.y = vec1.y - vec2.y;
        if (vec1.z != undefined && vec2.z != undefined) vec3.z = vec1.z - vec2.z;
        return vec3;
    },
    normalizeVector: function(vec) {
        if (vec.z != undefined) {
            var length = Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2))
            vec.x = vec.x / length;
            vec.y = vec.y / length;
            vec.z = vec.z / length;
        } else {
            var length = Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))
            vec.x = vec.x / length;
            vec.y = vec.y / length;
        }
        return vec;
    },
    magVector: function(vec) {
        if (vec.z != undefined) {
            var mag = Math.sqrt(vec.z * vec.z + vec.y * vec.y + vec.x * vec.x);
        } else {
            var mag = Math.sqrt(vec.y * vec.y + vec.x * vec.x);
        }
        return mag;
    }



}
