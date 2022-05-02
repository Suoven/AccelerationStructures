#version 440 core

out vec4 out_color;

layout(location = 0) uniform mat4 uniform_mvp;
layout(location = 1) uniform vec4 uniform_color;
layout(location = 2) uniform mat4 uniform_mv;
layout(location = 3) uniform mat3 uniform_normal_matrix;
layout(location = 4) uniform vec3 uniform_view_light_pos;

in vec3 var_view_pos;
in vec3 var_view_normal;

// Light constants
const vec3  c_light_ambient   = vec3(0.15, 0.15, 0.15);
const vec3  c_light_diffuse   = vec3(0.4, 0.4, 0.4);
const vec3  c_light_spec      = vec3(0.2, 0.2, 0.2);
const float c_light_shininess = 5.0;

void main()
{
    // Phong lighting
    vec3 n        = normalize(var_view_normal);
    vec3 to_light = normalize(uniform_view_light_pos - var_view_pos);
    vec3 view     = normalize(-var_view_pos);
    vec3 r        = reflect(-to_light, n);

    // Ambient
    vec3 amb = c_light_ambient * uniform_color.rgb;

    // Diffuse
    float ratio = max(dot(to_light, n), 0.0f);
    vec3  diff  = c_light_diffuse * ratio * uniform_color.rgb;

    // Specular
    float spec_ratio = max(dot(r, view), 0);
    vec3  spec       = c_light_spec * pow(spec_ratio, c_light_shininess) * uniform_color.rgb;

    vec3 result = amb + diff + spec;
    out_color   = vec4(result, uniform_color.a);
}
