precision highp float;
precision highp int;

varying vec2 vUv;
uniform sampler2D map;

uniform mat4 viewMatrix;

uniform vec3 diffuse;
uniform float opacity;
uniform vec3 ambient;
uniform vec3 emissive;

uniform vec3 ambientLightColor;

#define MAX_DIR_LIGHTS 1

#if MAX_DIR_LIGHTS > 0
	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];
	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];
#endif

varying vec3 vViewPosition;
varying vec3 vNormal;

uniform float toonSteps;

void main(void)
{  
	gl_FragColor = vec4( vec3( 1.0 ), opacity);

	vec4 texelColor = texture2D(map, vUv);

	gl_FragColor = gl_FragColor * texelColor;


	vec3 normal = normalize(vNormal);

	vec3 viewPosition = normalize(vViewPosition);


#if MAX_DIR_LIGHTS > 0
	vec3 dirDiffuse  = vec3( 0.0 );

	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ )
	{
		vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );
		vec3 dirVector = normalize( lDirection.xyz );
		float dotProduct = dot( normal, dirVector );

		float difLight = max(dotProduct, 0.0);

		float toonLight = floor(difLight * toonSteps) / toonSteps;

		float dirDiffuseWeight = toonLight * 0.25 + 0.5;

		dirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;
	}
#endif

	vec3 totalDiffuse = vec3(0.0);

#if MAX_DIR_LIGHTS > 0
	totalDiffuse += dirDiffuse;
#endif


	gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient);

} 
 