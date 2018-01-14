precision highp float;
precision highp int;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

attribute vec3 position;
attribute vec3 normal;

uniform float outline;


#define USE_SKINNING
#define MAX_BONES 100
uniform mat4 boneMatrices[MAX_BONES];

mat4 getBoneMatrix(const in float i)
{
	mat4 bone = boneMatrices[ int(i) ];
	return bone;
}

attribute vec4 skinIndex;
attribute vec4 skinWeight;

void main() 
{

vec3 objectNormal;
vec3 transformed;

#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += 0.01 * skinWeight.x * boneMatX;
	skinMatrix += 0.01 * skinWeight.y * boneMatY;
	skinMatrix += 0.01 * skinWeight.z * boneMatZ;
	skinMatrix += 0.01 * skinWeight.w * boneMatW;
	objectNormal = vec4(skinMatrix * vec4(normal, 0.0)).xyz;
#endif

#ifdef USE_SKINNING
	vec4 skinVertex = vec4( position, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * 0.01 * skinWeight.x;
	skinned += boneMatY * skinVertex * 0.01 * skinWeight.y;
	skinned += boneMatZ * skinVertex * 0.01 * skinWeight.z;
	skinned += boneMatW * skinVertex * 0.01 * skinWeight.w;
	transformed = ( skinned ).xyz;
#endif

//vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
//gl_Position = projectionMatrix * mvPosition;

	vec4 origin_position;
	vec4 outline_position;

	vec3 dir = normalize(objectNormal);

	//origin_position = viewMatrix * modelMatrix * vec4(position, 1.0);
	//outline_position = origin_position + vec4(normalMatrix * dir, 0.0);

	outline_position = viewMatrix * modelMatrix * vec4(transformed + dir*outline, 1.0);


	gl_Position =  projectionMatrix * outline_position;
}