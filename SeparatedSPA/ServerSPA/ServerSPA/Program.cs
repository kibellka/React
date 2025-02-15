var builder = WebApplication.CreateBuilder(args);

const string corsPolicy = "ClientSPA";

builder.Services.AddCors(options => options.AddPolicy(corsPolicy, builder => builder
    .WithOrigins("http://localhost:5052")
    .AllowAnyHeader()
    .AllowAnyMethod())
);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsPolicy);

app.UseAuthorization();

app.MapControllers();

app.Run();
